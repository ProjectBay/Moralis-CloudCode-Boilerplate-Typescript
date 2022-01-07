export const validation_isMaster = (request:any) => {
    if (request.master) {
      return;
    }
    if (!request.user || request.user.id !== 'masterUser') {
      throw 'Unauthorized';
    }
  }

export const validation_isUserAuthenticated = (request:any) => {
    if (request.user) {
        return;
    } else {
        throw 'Unauthorized';
    }
}