import { Dialog, Transition } from "@headlessui/react";
import { Fragment, ReactNode } from "react";

import CustomButton from "~/components/common/Button/button";

interface CustomModalProperties {
  onOpen: boolean;
  toggleState: () => void;
  buttonAction: () => void;
  showButtons: boolean;
  actionButtonText: string;
  actionButtonColor: string;
  children: ReactNode;
  buttonPosition: string;
  addCloseButton: boolean;
}

const CustomModal: React.FC<CustomModalProperties> = ({
  onOpen,
  toggleState,
  buttonAction,
  showButtons,
  actionButtonText,
  actionButtonColor,
  children,
  buttonPosition,
  addCloseButton,
}) => {
  return (
    <Transition.Root show={onOpen} as={Fragment}>
      <Dialog as="div" className="relative z-[1000]" onClose={toggleState}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 flex items-center justify-center overflow-y-auto">
          <div className="flex min-h-full min-w-[400px] max-w-[800px] items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative flex max-h-[500px] min-h-[200px] w-full transform flex-col overflow-hidden rounded-lg bg-white p-[24px] text-left shadow-xl transition-all sm:my-8">
                <div className="w-full flex-[5]">{children}</div>
                {showButtons && (
                  <div
                    className={`flex w-full flex-[1] ${buttonPosition == "right" ? "justify-end" : buttonPosition == "left" ? "justify-start" : "justify-center"}`}
                  >
                    <div className="flex flex-row gap-[8px]">
                      {addCloseButton && (
                        <CustomButton
                          variant="outline"
                          isDisabled={false}
                          onClick={() => toggleState(!onOpen)}
                        >
                          Close
                        </CustomButton>
                      )}

                      <CustomButton
                        variant={actionButtonColor}
                        isDisabled={false}
                        onClick={buttonAction}
                      >
                        {actionButtonText}
                      </CustomButton>
                    </div>
                  </div>
                )}
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

export default CustomModal;
