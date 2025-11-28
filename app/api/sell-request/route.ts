import { NextRequest, NextResponse } from 'next/server'
import pool from '@/lib/db'

// GET - Fetch all sell requests
export async function GET() {
  try {
    const result = await pool.query(
      'SELECT * FROM "sellrequest" ORDER BY created_at DESC'
    )
    return NextResponse.json({ success: true, data: result.rows })
  } catch (error) {
    console.error('Error fetching sell requests:', error)
    return NextResponse.json(
      { success: false, error: 'Failed to fetch sell requests' },
      { status: 500 }
    )
  }
}

// POST - Create a new sell request
export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, mobile, propertytype, address } = body

    // Validate required fields
    if (!name || !mobile || !propertytype || !address) {
      return NextResponse.json(
        { success: false, error: 'Missing required fields' },
        { status: 400 }
      )
    }

    const result = await pool.query(
      'INSERT INTO "sellrequest" (name, mobile, propertytype, address) VALUES ($1, $2, $3, $4) RETURNING *',
      [name, mobile, propertytype, address]
    )

    return NextResponse.json(
      { success: true, data: result.rows[0] },
      { status: 201 }
    )
  } catch (error) {
    console.error('Error creating sell request:', error)
    return NextResponse.json(
      { success: false, error: 'Failed to create sell request' },
      { status: 500 }
    )
  }
}

