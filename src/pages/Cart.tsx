import { useRef } from 'react'
import { useContext } from 'react'
import { WholeAppContext } from '@/context/store'
import { motion } from 'framer-motion'
import CartList from '@/components/ui/CartList'
import { Button } from '@/components/ui/button'
import jsPDF from 'jspdf'
import html2canvas from 'html2canvas'
import emailjs from 'emailjs-com'
import { Bounce, toast } from 'react-toastify'
import { ToastContainer } from 'react-toastify'

function Cart() {
    const { cart, totalPrice } = useContext(WholeAppContext)
    const invoiceRef = useRef(null)

    const handleCheckOut = async () => {
        if (!invoiceRef.current) {
            toast.error('Unable to generate invoice', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                transition: Bounce,
            });
            return;
        }

        const el = invoiceRef.current
        const { scrollWidth, scrollHeight } = el;

           toast.success('Your Invoice has been Generated', {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
        });

        const canvas = await html2canvas(el, {
            width: scrollWidth,
            height: scrollHeight,
            scale: 2,
            useCORS: true,
            backgroundColor: '#ffffff',
        })
        const imgData = canvas.toDataURL('image/png')

        const pdf = new jsPDF({
            unit: 'px',
            format: [canvas.width, canvas.height]
        })
        pdf.addImage(imgData, 'PNG', 0, 0, canvas.width, canvas.height)

        pdf.save(`invoice_${Date.now()}.pdf`)

        const pdfBlob = pdf.output('blob')
        const reader = new FileReader()
        reader.readAsDataURL(pdfBlob)
        reader.onloadend = () => {
            const base64data = reader.result.split(',')[1]
        }
    }

    return (
        <>
          <ToastContainer stacked={true} draggable={true} toastStyle={{backgroundColor:"white", borderRadius:10, padding:10}}/>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="min-h-screen pt-10"
            >
                <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-cream-50 via-amber-100 to-amber-100 h-full">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">Your Cart</h2>

                        {cart.length === 0 ? (
                            <div className='w-full h-full flex flex-row justify-center items-center mt-40'>
                                <span className="text-gradient text-xl font-semibold text-center">Your cart is empty, Add some sweets...</span>
                            </div>
                        ) : (
                            <>
                                <motion.ul layout className="flex flex-col gap-6">
                                    {cart.map(product => (
                                        <CartList
                                            key={product.id}
                                            id={product.id}
                                            name={product.name}
                                            image={product.image}
                                            price={product.price}
                                            quantity={product.quantity}
                                        />
                                    ))}
                                </motion.ul>
                                <div className="flex flex-col justify-end items-end mt-20">
                                    <div className='flex flex-col justify-end'>
                                        <span className='text-right text-2xl font-bold mt-8'>Total: ₹{totalPrice.toFixed(2)}</span>
                                        <span className='text-right text-sm font-semibold mt-2 text-slate-500 font-sans'>inclusive of all taxes.</span>
                                    </div>

                                    <Button
                                        className="px-4 py-2 md:px-2 md:py-1 w-[25%] md:w-[15%] bg-saffron-500 hover:bg-saffron-600 text-white text-lg rounded-lg mt-5 shadow-sm shadow-black"
                                        size="sm"
                                        onClick={handleCheckOut}
                                    >
                                        Checkout
                                    </Button>
                                </div>
                            </>
                        )}
                    </div>
                </section>
            </motion.div>

            {/* Improved Invoice Template */}
            <div
                ref={invoiceRef}
                style={{
                    width: '794px', // A4 width in pixels at 96 DPI
                    minHeight: '1123px', // A4 height in pixels at 96 DPI
                    position: 'absolute',
                    top: '-9999px',
                    left: '-9999px',
                    pointerEvents: 'none',
                    backgroundColor: '#ffffff',
                    fontFamily: 'Arial, sans-serif',
                    fontSize: '14px',
                    lineHeight: '1.4',
                    color: '#333333',
                    padding: '40px',
                    boxSizing: 'border-box'
                }}
            >
                {/* Header */}
                <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'flex-start',
                    marginBottom: '40px',
                    paddingBottom: '20px',
                    borderBottom: '2px solid #e5e7eb'
                }}>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <div style={{
                            width: '60px',
                            height: '60px',
                            backgroundColor: '#f3f4f6',
                            borderRadius: '8px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            marginRight: '20px',
                            border: '1px solid #d1d5db'
                        }}>
                            <span style={{ fontSize: '12px', color: '#6b7280' }}>Logo</span>
                        </div>
                        <div>
                            <h2 style={{
                                fontSize: '24px',
                                fontWeight: 'bold',
                                margin: '0 0 8px 0',
                                color: '#1f2937'
                            }}>
                                Kelava Sweets
                            </h2>
                            <div style={{ fontSize: '12px', color: '#6b7280', lineHeight: '1.5' }}>
                                1234 Main St.<br />
                                Delhi, 110032<br />
                                Phone: +91-9999414992
                            </div>
                        </div>
                    </div>
                    <div style={{ textAlign: 'right' }}>
                        <h1 style={{
                            fontSize: '28px',
                            fontWeight: 'bold',
                            margin: '0 0 12px 0',
                            color: '#1f2937'
                        }}>
                            INVOICE
                        </h1>
                        <div style={{ fontSize: '12px', color: '#6b7280' }}>
                            <div style={{ marginBottom: '4px' }}>
                                <span style={{ fontWeight: '600' }}>Invoice #:</span> INV-{new Date().getFullYear()}-{String(Date.now()).slice(-5)}
                            </div>
                            <div>
                                <span style={{ fontWeight: '600' }}>Date:</span> {new Date().toLocaleDateString()}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Billing Info */}
                <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    marginBottom: '40px',
                    fontSize: '13px'
                }}>
                    <div style={{ width: '45%' }}>
                        <h3 style={{
                            fontWeight: '600',
                            marginBottom: '8px',
                            color: '#1f2937',
                            fontSize: '14px'
                        }}>
                            Bill To:
                        </h3>
                        <div style={{ color: '#6b7280', lineHeight: '1.5' }}>
                            Customer Name<br />
                            5678 Client Rd.<br />
                            Client City, State ZIP
                        </div>
                    </div>
                    <div style={{ width: '45%' }}>
                        <h3 style={{
                            fontWeight: '600',
                            marginBottom: '8px',
                            color: '#1f2937',
                            fontSize: '14px'
                        }}>
                            Ship To:
                        </h3>
                        <div style={{ color: '#6b7280', lineHeight: '1.5' }}>
                            (Same as billing address)
                        </div>
                    </div>
                </div>

                {/* Items Table */}
                <table style={{
                    width: '100%',
                    borderCollapse: 'collapse',
                    marginBottom: '30px',
                    fontSize: '13px',
                    border: '1px solid #e5e7eb'
                }}>
                    <thead>
                        <tr style={{ backgroundColor: '#f9fafb' }}>
                            <th style={{
                                border: '1px solid #e5e7eb',
                                padding: '12px 8px',
                                textAlign: 'left',
                                fontWeight: '600',
                                color: '#1f2937'
                            }}>
                                Description
                            </th>
                            <th style={{
                                border: '1px solid #e5e7eb',
                                padding: '12px 8px',
                                textAlign: 'center',
                                fontWeight: '600',
                                color: '#1f2937',
                                width: '10%'
                            }}>
                                Qty
                            </th>
                            <th style={{
                                border: '1px solid #e5e7eb',
                                padding: '12px 8px',
                                textAlign: 'right',
                                fontWeight: '600',
                                color: '#1f2937',
                                width: '15%'
                            }}>
                                Unit Price
                            </th>
                            <th style={{
                                border: '1px solid #e5e7eb',
                                padding: '12px 8px',
                                textAlign: 'right',
                                fontWeight: '600',
                                color: '#1f2937',
                                width: '15%'
                            }}>
                                Line Total
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {cart.map((p, i) => (
                            <tr key={p.id} style={{
                                backgroundColor: i % 2 === 0 ? '#ffffff' : '#f9fafb'
                            }}>
                                <td style={{
                                    border: '1px solid #e5e7eb',
                                    padding: '12px 8px',
                                    color: '#374151'
                                }}>
                                    {p.name}
                                </td>
                                <td style={{
                                    border: '1px solid #e5e7eb',
                                    padding: '12px 8px',
                                    textAlign: 'center',
                                    color: '#374151'
                                }}>
                                    {p.quantity}
                                </td>
                                <td style={{
                                    border: '1px solid #e5e7eb',
                                    padding: '12px 8px',
                                    textAlign: 'right',
                                    color: '#374151'
                                }}>
                                    ₹{(p.price / p.quantity).toFixed(2)}
                                </td>
                                <td style={{
                                    border: '1px solid #e5e7eb',
                                    padding: '12px 8px',
                                    textAlign: 'right',
                                    color: '#374151'
                                }}>
                                    ₹{p.price.toFixed(2)}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>

                {/* Totals */}
                <div style={{
                    display: 'flex',
                    justifyContent: 'flex-end',
                    marginBottom: '40px'
                }}>
                    <div style={{ width: '300px' }}>
                        <div style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            padding: '8px 0',
                            fontSize: '13px',
                            color: '#374151'
                        }}>
                            <span>Subtotal:</span>
                            <span>₹{totalPrice.toFixed(2)}</span>
                        </div>
                        <div style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            padding: '8px 0',
                            fontSize: '13px',
                            color: '#374151'
                        }}>
                            <span>GST (18%):</span>
                            <span>₹{(totalPrice * 0.18).toFixed(2)}</span>
                        </div>
                        <div style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            padding: '12px 0',
                            marginTop: '8px',
                            borderTop: '2px solid #1f2937',
                            fontSize: '16px',
                            fontWeight: 'bold',
                            color: '#1f2937'
                        }}>
                            <span>Grand Total:</span>
                            <span>₹{(totalPrice * 1.18).toFixed(2)}</span>
                        </div>
                    </div>
                </div>

                {/* QR Code Section */}
                <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'flex-end',
                    marginTop: '40px',
                    paddingTop: '20px',
                    borderTop: '1px solid #e5e7eb'
                }}>
                    <div style={{
                        fontSize: '12px',
                        color: '#6b7280',
                        lineHeight: '1.5'
                    }}>
                        <p style={{ margin: '0 0 8px 0' }}>Payment due within 15 days.</p>
                        <p style={{ margin: '0', fontWeight: '600' }}>Thank you for your business!</p>
                    </div>

                    {/* <div style={{
                        textAlign: 'center',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center'
                    }}>
                        <img
                            src={`https://api.qrserver.com/v1/create-qr-code/?size=80x80&data=${encodeURIComponent(
                                JSON.stringify({
                                    invoice: `INV-${new Date().getFullYear()}-${String(Date.now()).slice(-5)}`,
                                    date: new Date().toISOString().split('T')[0],
                                    total: (totalPrice * 1.18).toFixed(2),
                                    items: cart.length,
                                    hash: btoa(`${Date.now()}-${totalPrice}-${cart.length}`).slice(0, 12)
                                })
                            )}`}
                            alt="Verification QR Code"
                            style={{
                                width: '80px',
                                height: '80px',
                                border: '1px solid #e5e7eb'
                            }}
                        />
                        <div style={{
                            fontSize: '10px',
                            color: '#6b7280',
                            marginTop: '4px',
                            textAlign: 'center'
                        }}>
                            <div>Scan to verify</div>
                            <div>authenticity</div>
                        </div>
                    </div> */}
                </div>
            </div>
        </>
    )
}

export default Cart