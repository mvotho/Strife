
import { Dialog } from '@headlessui/react';

const ModalDialog = ({ isOpen, setIsOpen }: any) => {
    return (
        <Dialog as="div" open={isOpen} onClose={() => setIsOpen(false)} className="relative z-10">
            <div className="">
                <Dialog.Overlay className="" />
                <div className="">
                    <Dialog.Title className="text-xl">Title of dialog</Dialog.Title>
                    <Dialog.Panel>
                        <form>
                            <div className="">
                                <label htmlFor="" className="">
                                    Channel Name: 
                                </label>
                                <input type="text" className=''></input>
                            </div>
                        </form>
                    </Dialog.Panel>
                    <button
                        className=""
                        onClick={() => setIsOpen(false)}
                    >
                        Cancel
                    </button>
                    <button
                        className=""
                        onClick={() => setIsOpen(false)}
                    >
                        Confirm
                    </button>
                </div>
            </div>
        </Dialog>
    );
};

export default ModalDialog;