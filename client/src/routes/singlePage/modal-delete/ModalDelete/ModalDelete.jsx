// import "./modal.scss"
import { Dialog, DialogPanel } from '@headlessui/react'
import { useState } from 'react';

export default function ModalDelete({ onCancel, onConfirm }) {
    const [open, setOpen] = useState(true)

    const handleClose = () => {
        setOpen(false)
        onCancel()
    }

    const handleConfirm = () => {
        setOpen(false)
        onConfirm()
    }

    return (
        <Dialog open={open} onClose={handleClose} >
            <div className="dialog-backdrop" onClick={handleClose}/>
            <div className="dialog-container">
                <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                    <div className="sm:flex sm:items-start">
                        <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                            <div className="mt-2">
                                <p className="text-base font-semibold leading-6 text-gray-900">
                                    Are you sure you want to delete this property?
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6 modal-buttons">
                    <button
                        type="button"
                        className="cancel"
                        onClick={handleClose}
                    >
                        Cancel
                    </button>
                    <button
                        type="button"
                        className="confirm"
                        onClick={handleConfirm}
                    >
                        Confirm
                    </button>
                </div>
            </div>
        </Dialog>
    )
}
