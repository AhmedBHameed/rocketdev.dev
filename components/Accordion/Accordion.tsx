import {Disclosure, Transition} from '@headlessui/react';
import {ChevronUpIcon} from '@heroicons/react/24/solid';
import React from 'react';
import theme from '../../styles/theme';
import clsx from '../../utils/clsx';

interface AccordionProps {
  titleNode?: React.ReactNode;
  children: React.ReactNode;
}

const Accordion = ({titleNode, children}: AccordionProps) => {
  return (
    <div
      className={clsx(
        'rounded-lg',
        'overflow-hidden',
        theme.text,
        theme.bgSecondary
      )}
    >
      <Disclosure>
        <Disclosure.Button
          className={clsx(
            'flex',
            'w-full',
            'justify-between',
            'rounded-lg',
            'px-4',
            'py-2',
            'text-left',
            theme.text,
            theme.bgSecondary,
            // 'hover:bg-purple-200',
            // 'focus-visible:ring-purple-500',
            'focus:outline-none',
            'focus-visible:ring',
            'focus-visible:ring-opacity-75'
          )}
        >
          <div className={clsx('flex', 'w-full', 'justify-between')}>
            {titleNode}

            <ChevronUpIcon
              className={`${
                'open' ? 'rotate-180 transform' : ''
              } h-5 w-5 text-purple-500`}
            />
          </div>
        </Disclosure.Button>
        <Transition
          enter="transition duration-100 ease-out"
          enterFrom="transform scale-95 opacity-0"
          enterTo="transform scale-100 opacity-100"
          leave="transition duration-75 ease-out"
          leaveFrom="transform scale-100 opacity-100"
          leaveTo="transform scale-95 opacity-0"
        >
          <Disclosure.Panel
            className={clsx('p-4', theme.text, theme.bgSecondary)}
          >
            {children}
          </Disclosure.Panel>
        </Transition>
      </Disclosure>
    </div>
  );
};

export default Accordion;
