import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {cancelOrder} from '../../features/orderSlice'

function MyOrders() {
    const dispatch = useDispatch()
    const { orders } = useSelector(state => state.orders)

    // Handle cancel order button click
    const handleCancelOrder = (id) => {
        const result = confirm('Do you really want to cancel the order?')
        if(result)
            dispatch(cancelOrder({id}))
        // Dispatch an action to cancel the order (assuming you have cancelOrder action)
        
    }

    return (
        <div className="min-h-screen bg-gray-100">
            <nav className="bg-green-400 p-5 text-white text-lg font-semibold">
                My Orders
            </nav>
            
            <div className="max-w-4xl mx-auto mt-6 p-6 bg-white rounded-lg shadow-lg">
                {/* Check if there are any orders */}
                {orders && orders.length > 0 ? (
                    <div className="space-y-6">
                        {orders.map(order => (
                            <div
                                key={order.id}
                                className="border p-5 rounded-lg shadow-sm hover:shadow-lg transition-all"
                            >
                                <div className="flex justify-between items-center">
                                    <h2 className="text-xl max-sm:text-sm font-bold text-gray-700">Order ID: {order.id}</h2>
                                    <div className='flex gap-2'>
                                    <span className=''>Quantity:</span>
                                    <span>{order.quantity}</span>
                                    </div>
                                </div>
                                <div className="mt-4 flex flex-col gap-3">
                                    <h3 className="text-lg max-sm:text-sm font-semibold text-gray-600">Order Items:</h3>
                                    <ul className="flex ml-10 flex-col">
                                        {order.items.split(' ').map((item, index) => (
                                            <li key={index}>{item}</li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="mt-4 flex justify-between items-center">
                                    <span className="font-semibold text-gray-700">Total:</span>
                                    <span className="font-semibold text-gray-900">₹{order.TotalPrice}</span>
                                </div>

                                {/* Only show the "Cancel Order" button if the order is not delivered */}
                                {order.status !== 'Delivered' && (
                                    <div className="mt-4 flex justify-end">
                                        <button
                                            onClick={() => handleCancelOrder(order.id)}
                                            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700 transition"
                                        >
                                            Cancel Order
                                        </button>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="text-center text-gray-500">
                        <p>You have no orders yet!</p>
                    </div>
                )}
            </div>
        </div>
    )
}

export default MyOrders
