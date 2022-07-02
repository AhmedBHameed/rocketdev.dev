import React from 'react';
import {ToastContainer, Slide} from 'react-toastify';

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
    className="impct-toast"
    position="bottom-left"
    autoClose={3000}
    hideProgressBar
    newestOnTop
    closeOnClick
    rtl={false}
    draggable={false}
    pauseOnHover
    transition={Slide}
  />
);

export default ToastMessage;
