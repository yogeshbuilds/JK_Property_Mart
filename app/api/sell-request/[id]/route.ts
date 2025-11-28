import { NextRequest, NextResponse } from 'next/server'
import pool from '@/lib/db'

// DELETE - Delete a sell request by ID
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
      'DELETE FROM "sellrequest" WHERE id = $1 RETURNING *',
      [id]
    )

    if (result.rows.length === 0) {
      return NextResponse.json(
        { success: false, error: 'Sell request not found' },
        { status: 404 }
      )
    }

    return NextResponse.json({
      success: true,
      message: 'Sell request deleted successfully',
      data: result.rows[0],
    })
  } catch (error) {
    console.error('Error deleting sell request:', error)
    return NextResponse.json(
      { success: false, error: 'Failed to delete sell request' },
      { status: 500 }
    )
  }
}

