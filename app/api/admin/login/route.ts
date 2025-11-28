import { NextRequest, NextResponse } from 'next/server'

// Admin password stored in environment variable or hardcoded
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || 'admin123'

// POST - Authenticate admin
export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { password } = body

    if (!password) {
      return NextResponse.json(
        { success: false, error: 'Password is required' },
        { status: 400 }
      )
    }

    if (password === ADMIN_PASSWORD) {
      return NextResponse.json({
        success: true,
        message: 'Authentication successful',
      })
    } else {
      return NextResponse.json(
        { success: false, error: 'Invalid password' },
        { status: 401 }
      )
    }
  } catch (error) {
    console.error('Error authenticating admin:', error)
    return NextResponse.json(
      { success: false, error: 'Authentication failed' },
      { status: 500 }
    )
  }
}

