import {Fragment, useCallback, useEffect, useState} from 'react';
import {Combobox, Transition} from '@headlessui/react';
import clsx from '../../utils/clsx';
import theme from '../../styles/theme';
import {CheckIcon, ChevronUpDownIcon} from '@heroicons/react/24/solid';

interface AutocompleteOptions {
  label: string;
  value: string;
}

interface AutocompleteProps {
  id?: string;
  className?: string;
  error?: boolean;
  value?: string;
  options: AutocompleteOptions[];
  onSearch: (search: string) => void;
}

const Autocomplete = ({
  id,
  className,
  error,
  value,
  options = [],
  onSearch,
}: AutocompleteProps) => {
  const [selected, setSelected] = useState<AutocompleteOptions | null>(null);
  const [query, setQuery] = useState('');

  const filteredOptions =
    query === ''
      ? options
      : options.filter((option) =>
          option.label
            .toLowerCase()
            .replace(/\s+/g, '')
            .includes(query.toLowerCase().replace(/\s+/g, ''))
        );

  useEffect(() => {
    if (value)
      setSelected(options.find((option) => option.value === value) || null);
  }, [value, options]);

  return (
    <div className="relative w-full">
      <Combobox value={selected} onChange={setSelected}>
        <div className="relative mt-1">
          <div className="relative w-full cursor-default overflow-hidden rounded-lg bg-white text-left shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-teal-300 sm:text-sm">
            <Combobox.Input
              id={id}
              // className="w-full border-none py-2 pl-3 pr-10 text-sm leading-5 text-gray-900 focus:ring-0"
              className={clsx(
                'appearance-none',
                'block',
                'w-full',
                'px-2',
                'py-1',
                'border-2',
                'rounded-md',
                'shadow-sm',
                'placeholder-gray-500',
                'focus:outline-none',
                'sm:text-sm',
                className,
                theme.bgMain,
                theme.text,
                error ? 'border-red-500' : ''
              )}
              displayValue={(option: AutocompleteOptions) => option?.label}
              onChange={(event) => {
                const value = event.target.value;
                setQuery(value);
                onSearch(value);
              }}
            />
            <Combobox.Button className="absolute inset-y-0 right-0 flex items-center pr-2">
              <ChevronUpDownIcon
                className="h-5 w-5 text-gray-400"
                aria-hidden="true"
              />
            </Combobox.Button>
          </div>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            afterLeave={() => setQuery('')}
          >
            <Combobox.Options
              className={clsx(
                'absolute',
                'shadow-lg',
                theme.bgMain,
                'my-1',
                'p-0',
                'max-h-60',
                'w-full',
                'list-none',
                'z-10',
                'rounded-lg',
                'overflow-auto',
                'sm:text-sm'
              )}
            >
              {filteredOptions.length === 0 && query !== '' ? (
                <div className="relative cursor-default select-none py-2 px-4 text-gray-700">
                  Nothing found.
                </div>
              ) : (
                filteredOptions.map((person) => (
                  <Combobox.Option
                    key={person.value}
                    className={({active}) => {
                      return clsx(
                        theme.text,
                        'relative',
                        'cursor-default',
                        'select-none',
                        'py-2',
                        'pl-10',
                        'pr-4',
                        active ? 'bg-red-600' : 'text-gray-900'
                      );
                    }}
                    value={person}
                  >
                    {({selected, active}) => (
                      <>
                        <span
                          className={`block truncate ${
                            selected ? 'font-medium' : 'font-normal'
                          }`}
                        >
                          {person.label}
                        </span>
                        {selected ? (
                          <span
                            className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
                              active ? 'text-white' : 'text-red-600'
                            }`}
                          >
                            <CheckIcon className="h-5 w-5" aria-hidden="true" />
                          </span>
                        ) : null}
                      </>
                    )}
                  </Combobox.Option>
                ))
              )}
            </Combobox.Options>
          </Transition>
        </div>
      </Combobox>
    </div>
  );
};

export default Autocomplete;
