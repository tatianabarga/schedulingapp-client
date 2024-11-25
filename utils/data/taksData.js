// import { defaultConfig } from 'next/dist/server/config-shared';
import { clientCredentials } from '../client';

const getTasksByDay = (dayId) => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/day?task=${dayId}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then(resolve)
    .catch(reject);
});

// const getSingleProfile = (id) => new Promise((resolve, reject) => {
//   fetch(`${clientCredentials.databaseURL}/profiles/${id}`, {
//     method: 'GET',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//   })
//     .then((response) => response.json())
//     .then((data) => resolve(data))
//     .catch(reject);
// });

const createTask = (payload) => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/task`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

// const updateProfile = (payload) => new Promise((resolve, reject) => {
//   if (!payload.id) {
//     reject(new Error('Profile ID is required for updating a profile.'));
//     return;
//   }

//   fetch(`${clientCredentials.databaseURL}/profiles/${payload.id}`, {
//     method: 'PUT',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(payload),
//   })
//     .then((data) => resolve(data))
//     .catch(reject);
// });

// const getProfilesByCircle = (id) => new Promise((resolve, reject) => {
//   fetch(`${clientCredentials.databaseURL}/profiles?circle=${id}`, {
//     method: 'GET',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//   })
//     .then((response) => response.json())
//     .then(resolve)
//     .catch(reject);
// });

// const deleteProfile = (id) => new Promise((resolve, reject) => {
//   fetch(`${clientCredentials.databaseURL}/profiles/${id}`, {
//     method: 'DELETE',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//   })
//     .then((response) => {
//       if (!response.ok) {
//         throw new Error('Error deleting profile');
//       }
//       resolve(response);
//     })
//     .catch(reject);
// });

export {
  getTasksByDay,
  // getSingleProfile,
  createTask,
// updateProfile,
// getProfilesByCircle,
// deleteProfile,
};
