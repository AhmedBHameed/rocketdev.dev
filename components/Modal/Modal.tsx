import React, {Fragment} from 'react';
import {Dialog, Transition} from '@headlessui/react';
import theme from '../../styles/theme';
import clsx from '../../utils/clsx';
import BoldLabel from '../Label/BoldLabel';
import {XCircleIcon} from '@heroicons/react/outline';
import BaseButton from '../Buttons/BaseButton';

interface ModalProps {
  title: string;
  open: boolean;
  onClose?: () => void;
  children: React.ReactNode;
}

const Modal = ({open, title, children, onClose}: ModalProps) => {
  return (
    <Transition appear show={open} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel
                className={clsx(
                  theme.bgMain,
                  theme.text,
                  'w-full max-w-md transform overflow-hidden rounded-2xl p-6 text-left align-middle shadow-xl transition-all'
                )}
              >
                <Dialog.Title
                  as="h3"
                  className="text-lg font-medium leading-6 mb-10"
                >
                  <div className="flex justify-between">
                    <h3>
                      <BoldLabel>{title}</BoldLabel>
                    </h3>

                    <BaseButton onClick={onClose}>
                      <XCircleIcon className={clsx('w-6 h-6')} />
                    </BaseButton>
                  </div>
                </Dialog.Title>

                {children}
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default Modal;
