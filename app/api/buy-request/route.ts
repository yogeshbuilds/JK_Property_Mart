import { NextRequest, NextResponse } from 'next/server'
import pool from '@/lib/db'

// GET - Fetch all buy requests
export async function GET() {
  try {
    const result = await pool.query(
      'SELECT * FROM "buyrequest" ORDER BY created_at DESC'
    )
    return NextResponse.json({ success: true, data: result.rows })
  } catch (error) {
    console.error('Error fetching buy requests:', error)
    return NextResponse.json(
      { success: false, error: 'Failed to fetch buy requests' },
      { status: 500 }
    )
  }
}

// POST - Create a new buy request
export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, phone, lookingfor, budget } = body

    // Validate required fields
    if (!name || !phone || !lookingfor || !budget) {
      return NextResponse.json(
        { success: false, error: 'Missing required fields' },
        { status: 400 }
      )
    }

    const result = await pool.query(
      'INSERT INTO "buyrequest" (name, phone, lookingfor, budget) VALUES ($1, $2, $3, $4) RETURNING *',
      [name, phone, lookingfor, budget]
    )

    return NextResponse.json(
      { success: true, data: result.rows[0] },
      { status: 201 }
    )
  } catch (error) {
    console.error('Error creating buy request:', error)
    return NextResponse.json(
      { success: false, error: 'Failed to create buy request' },
      { status: 500 }
    )
  }
}

