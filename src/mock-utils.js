export function getProfile() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const throwError = Math.round(Math.random() * 10) >= 6;

      if (throwError) {
        return reject({ message: 'An unbelievable error occurred... network stuff is hard' });
      }

      return resolve({
        json() {
          return new Promise(resolve => resolve({
            name: 'Getting better at following the data!',
          }));
        },
      });

    }, Math.round(Math.random() * 4000 + 1000));
  })
}
