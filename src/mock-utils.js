export function getProfile() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({
        json() {
          return new Promise(resolve => resolve({
            name: 'Getting better at following the data!',
          }));
        },
      });

    }, Math.round(Math.random() * 4000 + 1000));
  })
}
