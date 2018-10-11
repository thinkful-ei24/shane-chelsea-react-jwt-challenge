// actions for showing and hiding dialog
export const SHOW_DIALOG = 'SHOW_DIALOG';
export const showDialog = () => ({
  type: SHOW_DIALOG
});

export const HIDE_DIALOG = 'HIDE_DIALOG';
export const hideDialog = () => ({
  type: HIDE_DIALOG
});

// setting logout time
export const LOGOUT_TIME = 'LOGOUT_TIME';
export const logoutTime = time => ({
  type: LOGOUT_TIME,
  time
});
