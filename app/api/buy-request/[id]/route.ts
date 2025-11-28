import { NextRequest, NextResponse } from 'next/server'
import pool from '@/lib/db'

// DELETE - Delete a buy request by ID
export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params

    if (!id) {
      return NextResponse.json(
        { success: false, error: 'ID is required' },
        { status: 400 }
      )
    }

    const result = await pool.query(
      'DELETE FROM "buyrequest" WHERE id = $1 RETURNING *',
      [id]
    )

    if (result.rows.length === 0) {
      return NextResponse.json(
        { success: false, error: 'Buy request not found' },
        { status: 404 }
      )
    }

    return NextResponse.json({
      success: true,
      message: 'Buy request deleted successfully',
      data: result.rows[0],
    })
  } catch (error) {
    console.error('Error deleting buy request:', error)
    return NextResponse.json(
      { success: false, error: 'Failed to delete buy request' },
      { status: 500 }
    )
  }
}

