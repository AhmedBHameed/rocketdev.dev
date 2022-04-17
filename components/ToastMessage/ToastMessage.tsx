import 'react-toastify/dist/ReactToastify.css';

import React from 'react';
import {ToastContainer, Slide} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

/**
 * How to style with styled-components @see https://fkhadra.github.io/react-toastify/how-to-style/#how-to-style-with-styled-components
 */
// const StyledToastContainer = styled(ToastContainer)((props) => {
//   const {white, darkGray} = props.theme.colors;
//   return `
//     & .Toastify__toast {
//       border-radius: 1rem;
//       margin: 0.5rem;
//       padding: 2rem;
//     }
//     & .Toastify__toast--success,
//     & .Toastify__toast--error {
//       color: ${darkGray};
//       background-color: ${white};
//     }
//   `;
// });

/**
 * Usage:
 * - Add <Notifications /> component in App.ts
 * - Use "triggerNotification" function from NotificationsHook.tsx.
 * - Example of triggering toast message:
 *
 *  triggerNotification({
 *      type: 'success',
 *      title: 'Hey',
 *      message: 'Welcome to our hi.health services',
 *  }, config);
 */

const ToastMessage: React.FC = () => (
  <ToastContainer
    position="bottom-left"
    newestOnTop
    closeOnClick
    rtl={false}
    draggable={false}
    pauseOnHover
    transition={Slide}
  />
);

export default ToastMessage;
