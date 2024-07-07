import iziToast from 'izitoast';

export function notification(type, title, message) {
  const iziToastParams = {
    transitionOut: 'fadeOutDown',
    position: 'topRight',
    message: message,
    title: title,
    theme: 'dark',
  };

  switch (type) {
    case 'error':
      iziToast.error(iziToastParams);
      break;
    case 'success':
      iziToast.success(iziToastParams);
      break;
    case 'info':
      iziToast.info(iziToastParams);
      break;
    default:
      iziToast.show(iziToastParams);
  }

  return;
}
