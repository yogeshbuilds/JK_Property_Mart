"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Trash2, LogOut, RefreshCw } from "lucide-react"

interface buyrequest {
  id: number
  name: string
  phone: string
  lookingfor: string
  budget: string | null
  created_at: string
}

interface sellrequest {
  id: number
  name: string
  mobile: string
  propertytype: string
  address: string
  created_at: string
}

export default function AdminPanel() {
  const router = useRouter()
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [password, setPassword] = useState("")
  const [loading, setLoading] = useState(false)
  const [buyRequests, setBuyRequests] = useState<buyrequest[]>([])
  const [sellRequests, setSellRequests] = useState<sellrequest[]>([])
  const [loadingData, setLoadingData] = useState(false)

  // Check if already authenticated
  useEffect(() => {
    const authStatus = sessionStorage.getItem("admin_authenticated")
    if (authStatus === "true") {
      setIsAuthenticated(true)
      fetchData()
    }
  }, [])

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    try {
      const response = await fetch("/api/admin/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ password }),
      })

      const data = await response.json()

      if (data.success) {
        setIsAuthenticated(true)
        sessionStorage.setItem("admin_authenticated", "true")
        fetchData()
      } else {
        alert("Invalid password. Please try again.")
      }
    } catch (error) {
      console.error("Login error:", error)
      alert("Failed to authenticate. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  const handleLogout = () => {
    sessionStorage.removeItem("admin_authenticated")
    setIsAuthenticated(false)
    setBuyRequests([])
    setSellRequests([])
  }

  const fetchData = async () => {
    setLoadingData(true)
    try {
      const [buyRes, sellRes] = await Promise.all([
        fetch("/api/buy-request"),
        fetch("/api/sell-request"),
      ])

      const buyData = await buyRes.json()
      const sellData = await sellRes.json()

      if (buyData.success) {
        setBuyRequests(buyData.data)
      }
      if (sellData.success) {
        setSellRequests(sellData.data)
      }
    } catch (error) {
      console.error("Error fetching data:", error)
      alert("Failed to fetch data. Please try again.")
    } finally {
      setLoadingData(false)
    }
  }

  const handleDeleteBuyRequest = async (id: number) => {
    if (!confirm("Are you sure you want to delete this buy request?")) {
      return
    }

    try {
      const response = await fetch(`/api/buy-request/${id}`, {
        method: "DELETE",
      })

      const data = await response.json()

      if (data.success) {
        setBuyRequests(buyRequests.filter((req) => req.id !== id))
        alert("Buy request deleted successfully")
      } else {
        alert("Failed to delete buy request")
      }
    } catch (error) {
      console.error("Error deleting buy request:", error)
      alert("Failed to delete buy request")
    }
  }

  const handleDeleteSellRequest = async (id: number) => {
    if (!confirm("Are you sure you want to delete this sell request?")) {
      return
    }

    try {
      const response = await fetch(`/api/sell-request/${id}`, {
        method: "DELETE",
      })

      const data = await response.json()

      if (data.success) {
        setSellRequests(sellRequests.filter((req) => req.id !== id))
        alert("Sell request deleted successfully")
      } else {
        alert("Failed to delete sell request")
      }
    } catch (error) {
      console.error("Error deleting sell request:", error)
      alert("Failed to delete sell request")
    }
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleString("en-IN", {
      timeZone: "Asia/Kolkata",
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    })
  }

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
        <Card className="w-full max-w-md">
          <CardHeader>
            <CardTitle className="text-2xl text-center">Admin Login</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleLogin} className="space-y-4">
              <div className="space-y-2">
                <label htmlFor="password" className="text-sm font-medium">
                  Password
                </label>
                <Input
                  id="password"
                  type="password"
                  placeholder="Enter admin password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  autoFocus
                />
              </div>
              <Button type="submit" className="w-full" disabled={loading}>
                {loading ? "Logging in..." : "Login"}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <h1 className="text-3xl font-bold">Admin Panel</h1>
          <div className="flex gap-2">
            <Button
              variant="outline"
              onClick={fetchData}
              disabled={loadingData}
              className="flex items-center gap-2"
            >
              <RefreshCw
                className={`h-4 w-4 ${loadingData ? "animate-spin" : ""}`}
              />
              Refresh
            </Button>
            <Button
              variant="destructive"
              onClick={handleLogout}
              className="flex items-center gap-2"
            >
              <LogOut className="h-4 w-4" />
              Logout
            </Button>
          </div>
        </div>

        {/* Buy Requests Section */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl">Buy Requests</CardTitle>
            <p className="text-sm text-muted-foreground">
              Total: {buyRequests.length} requests
            </p>
          </CardHeader>
          <CardContent>
            {loadingData ? (
              <div className="text-center py-8">Loading...</div>
            ) : buyRequests.length === 0 ? (
              <div className="text-center py-8 text-muted-foreground">
                No buy requests found
              </div>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="border-b bg-gray-100">
                      <th className="p-3 text-left text-sm font-semibold">ID</th>
                      <th className="p-3 text-left text-sm font-semibold">Name</th>
                      <th className="p-3 text-left text-sm font-semibold">Phone</th>
                      <th className="p-3 text-left text-sm font-semibold">
                        Looking For
                      </th>
                      <th className="p-3 text-left text-sm font-semibold">
                        Budget
                      </th>
                      <th className="p-3 text-left text-sm font-semibold">
                        Created At
                      </th>
                      <th className="p-3 text-left text-sm font-semibold">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {buyRequests.map((request) => (
                      <tr
                        key={request.id}
                        className="border-b hover:bg-gray-50 transition-colors"
                      >
                        <td className="p-3 text-sm">{request.id}</td>
                        <td className="p-3 text-sm font-medium">{request.name}</td>
                        <td className="p-3 text-sm">{request.phone}</td>
                        <td className="p-3 text-sm capitalize">
                          {request.lookingfor.replace("-", " ")}
                        </td>
                        <td className="p-3 text-sm">
                          {request.budget ?? "—"}
                        </td>
                        <td className="p-3 text-sm text-muted-foreground">
                          {formatDate(request.created_at)}
                        </td>
                        <td className="p-3">
                          <Button
                            variant="destructive"
                            size="sm"
                            onClick={() => handleDeleteBuyRequest(request.id)}
                            className="flex items-center gap-1"
                          >
                            <Trash2 className="h-4 w-4" />
                            Delete
                          </Button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Sell Requests Section */}
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">Sell Requests</CardTitle>
            <p className="text-sm text-muted-foreground">
              Total: {sellRequests.length} requests
            </p>
          </CardHeader>
          <CardContent>
            {loadingData ? (
              <div className="text-center py-8">Loading...</div>
            ) : sellRequests.length === 0 ? (
              <div className="text-center py-8 text-muted-foreground">
                No sell requests found
              </div>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="border-b bg-gray-100">
                      <th className="p-3 text-left text-sm font-semibold">ID</th>
                      <th className="p-3 text-left text-sm font-semibold">Name</th>
                      <th className="p-3 text-left text-sm font-semibold">Mobile</th>
                      <th className="p-3 text-left text-sm font-semibold">
                        Property Type
                      </th>
                      <th className="p-3 text-left text-sm font-semibold">Address</th>
                      <th className="p-3 text-left text-sm font-semibold">
                        Created At
                      </th>
                      <th className="p-3 text-left text-sm font-semibold">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {sellRequests.map((request) => (
                      <tr
                        key={request.id}
                        className="border-b hover:bg-gray-50 transition-colors"
                      >
                        <td className="p-3 text-sm">{request.id}</td>
                        <td className="p-3 text-sm font-medium">{request.name}</td>
                        <td className="p-3 text-sm">{request.mobile}</td>
                        <td className="p-3 text-sm capitalize">
                          {request.propertytype.replace("-", " ")}
                        </td>
                        <td className="p-3 text-sm max-w-xs truncate">
                          {request.address}
                        </td>
                        <td className="p-3 text-sm text-muted-foreground">
                          {formatDate(request.created_at)}
                        </td>
                        <td className="p-3">
                          <Button
                            variant="destructive"
                            size="sm"
                            onClick={() => handleDeleteSellRequest(request.id)}
                            className="flex items-center gap-1"
                          >
                            <Trash2 className="h-4 w-4" />
                            Delete
                          </Button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

