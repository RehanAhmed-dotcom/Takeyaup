import Axios from 'axios';
const axios = Axios.create({
  baseURL: 'https://takeyaup.com/api',
  headers: {Accept: 'application/json', 'Content-Type': 'application/json'},
});
const authorizedHeaders = {
  'Content-Type': 'application/json',
  Accept: 'application/json',
  Authorization: '',
};
const login = payload => {
  const request = `/login`;
  return axios
    .post(request, payload)
    .then(({data, status}) => {
      return status === 200 || status === 201 ? data : null;
    })
    .catch(e => {
      console.log('in catch login', e);
    });
};
const register = payload => {
  console.log('payload', JSON.stringify(payload));
  const request = `/register`;
  return axios
    .post(request, payload, {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'multipart/form-data',
      },
    })
    .then(({data, status}) => {
      return status === 200 || status === 201 ? data : null;
    })
    .catch(e => {
      console.log('in register', e);
    });
};
const enterEmail = payload => {
  const request = `/forgot`;
  return axios
    .post(request, payload)
    .then(({data, status}) => {
      return status === 200 || status === 201 ? data : null;
    })
    .catch(e => {
      console.log('in forgot email', e);
    });
};
const otp = payload => {
  const request = `/confirm`;
  return axios
    .post(request, payload)
    .then(({data, status}) => {
      return status === 200 || status === 201 ? data : null;
    })
    .catch(e => {
      console.log('in otp', e);
    });
};
const newPassword = payload => {
  const request = `/reset`;
  return axios
    .post(request, payload)
    .then(({data, status}) => {
      return status === 200 || status === 201 ? data : null;
    })
    .catch(e => {
      console.log('in new password', e);
    });
};
const files = () => {
  const request = `/files`;
  return axios
    .get(request)
    .then(({data, status}) => {
      return status === 200 || status === 201 ? data : null;
    })
    .catch(e => {
      console.log('in new password', e);
    });
};
const editProfile = (payload, data1) => {
  // console.log('res check', JSON.stringify(data1));
  const request = `/edit`;
  return axios
    .post(request, data1, {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'multipart/form-data',
        Authorization: `Bearer ${payload.Auth}`,
      },
    })
    .then(({data, status}) => {
      return status === 200 || status === 201 ? data : null;
    })
    .catch(e => {
      console.log('in edit profile ', e);
    });
};
const changePassword = payload => {
  const request = `/change-password`;
  console.log('paylaod', payload);
  authorizedHeaders.Authorization = `Bearer ${payload.Auth}`;
  return axios
    .post(request, payload, {headers: authorizedHeaders})
    .then(({data, status}) => {
      return status === 200 || status === 201 ? data : null;
    })
    .catch(e => {
      console.log('in change password', e);
    });
};
const addPost = (payload, data) => {
  console.log('data', data);
  const request = `/posts`;
  return axios
    .post(request, data, {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'multipart/form-data',
        Authorization: `Bearer ${payload.Auth}`,
      },
    })
    .then(({data, status}) => {
      return status === 200 || status === 201 ? data : null;
    })
    .catch(e => {
      console.log('in add post', e);
    });
};
const showPosts = payload => {
  const request = `/showPosts`;
  authorizedHeaders.Authorization = `Bearer ${payload.Auth}`;
  return axios
    .get(request, {headers: authorizedHeaders})
    .then(({data, status}) => {
      return status === 200 || status === 201 ? data : null;
    })
    .catch(e => {
      console.log('in showPosts', e);
    });
};
const PowerRaking = payload => {
  const request = `/power-rankings`;
  authorizedHeaders.Authorization = `Bearer ${payload.Auth}`;
  return axios
    .get(request, {headers: authorizedHeaders})
    .then(({data, status}) => {
      return status === 200 || status === 201 ? data : null;
    })
    .catch(e => {
      console.log('in power ranking', e);
    });
};
const Search = payload => {
  const request = `/search-user/${payload.name}`;
  authorizedHeaders.Authorization = `Bearer ${payload.Auth}`;
  return axios
    .get(request, {headers: authorizedHeaders})
    .then(({data, status}) => {
      return status === 200 || status === 201 ? data : null;
    })
    .catch(e => {
      console.log('in user', e);
    });
};
const postLike = payload => {
  const request = `/post/like`;
  authorizedHeaders.Authorization = `Bearer ${payload.Auth}`;
  return axios
    .post(request, payload, {headers: authorizedHeaders})
    .then(({data, status}) => {
      return status === 200 || status === 201 ? data : null;
    })
    .catch(e => {
      console.log('in like post', e);
    });
};
const PostLikes = payload => {
  const request = `/feed-like`;
  authorizedHeaders.Authorization = `Bearer ${payload.Auth}`;
  return axios
    .post(request, payload, {headers: authorizedHeaders})
    .then(({data, status}) => {
      return status === 200 || status === 201 ? data : null;
    })
    .catch(e => {
      console.log('in like post', e);
    });
};
const sendMessage = payload => {
  const request = `/send-message`;
  authorizedHeaders.Authorization = `Bearer ${payload.Auth}`;
  return axios
    .post(request, payload, {headers: authorizedHeaders})
    .then(({data, status}) => {
      return status === 200 || status === 201 ? data : null;
    })
    .catch(e => {
      console.log('in send message', e);
    });
};
const showComments = payload => {
  const request = `/comment/${payload.id}`;
  authorizedHeaders.Authorization = `Bearer ${payload.Auth}`;
  return axios
    .get(request, {headers: authorizedHeaders})
    .then(({data, status}) => {
      return status === 200 || status === 201 ? data : null;
    })
    .catch(e => {
      console.log('in show comments', e);
    });
};
const showComment = payload => {
  const request = `/view-message/${payload.id}`;
  authorizedHeaders.Authorization = `Bearer ${payload.Auth}`;
  return axios
    .get(request, {headers: authorizedHeaders})
    .then(({data, status}) => {
      return status === 200 || status === 201 ? data : null;
    })
    .catch(e => {
      console.log('in show comments', e);
    });
};
const betCount = payload => {
  const request = `/bet-count/${payload.id}`;
  authorizedHeaders.Authorization = `Bearer ${payload.Auth}`;
  return axios
    .get(request, {headers: authorizedHeaders})
    .then(({data, status}) => {
      return status === 200 || status === 201 ? data : null;
    })
    .catch(e => {
      console.log('in bet count', e);
    });
};
const doComment = payload => {
  const request = `/comment`;
  authorizedHeaders.Authorization = `Bearer ${payload.Auth}`;
  return axios
    .post(request, payload, {headers: authorizedHeaders})
    .then(({data, status}) => {
      return status === 200 || status === 201 ? data : null;
    })
    .catch(e => {
      console.log('in do comment', e);
    });
};
const searchUser = payload => {
  const request = `/searchData/${payload.search}`;
  authorizedHeaders.Authorization = `Bearer ${payload.Auth}`;
  return axios
    .get(request, {headers: authorizedHeaders})
    .then(({data, status}) => {
      return status === 200 || status === 201 ? data : null;
    })
    .catch(e => {
      console.log('in seacrh user', e);
    });
};
const userProfile = payload => {
  const request = `/profile/${payload.id}`;
  authorizedHeaders.Authorization = `Bearer ${payload.Auth}`;
  return axios
    .get(request, {headers: authorizedHeaders})
    .then(({data, status}) => {
      return status === 200 || status === 201 ? data : null;
    })
    .catch(e => {
      console.log('in user Profile', e);
    });
};
const followUser = payload => {
  const request = `/user`;
  authorizedHeaders.Authorization = `Bearer ${payload.Auth}`;
  return axios
    .post(request, payload, {headers: authorizedHeaders})
    .then(({data, status}) => {
      return status === 200 || status === 201 ? data : null;
    })
    .catch(e => {
      console.log('in followUser', e);
    });
};
const acc = payload => {
  const request = `/accept`;
  authorizedHeaders.Authorization = `Bearer ${payload.Auth}`;
  return axios
    .post(request, payload, {headers: authorizedHeaders})
    .then(({data, status}) => {
      return status === 200 || status === 201 ? data : null;
    })
    .catch(e => {
      console.log('in accept', e);
    });
};
const rej = payload => {
  const request = `/reject`;
  authorizedHeaders.Authorization = `Bearer ${payload.Auth}`;
  return axios
    .post(request, payload, {headers: authorizedHeaders})
    .then(({data, status}) => {
      return status === 200 || status === 201 ? data : null;
    })
    .catch(e => {
      console.log('in reject', e);
    });
};
const postDetails = payload => {
  const request = `/postDetails/${payload.post_id}`;
  authorizedHeaders.Authorization = `Bearer ${payload.Auth}`;
  return axios
    .get(request, {headers: authorizedHeaders})
    .then(({data, status}) => {
      return status === 200 || status === 201 ? data : null;
    })
    .catch(e => {
      console.log('in post details', e);
    });
};
const notificationList = payload => {
  const request = `/notification-list`;
  authorizedHeaders.Authorization = `Bearer ${payload.Auth}`;
  return axios
    .get(request, {headers: authorizedHeaders})
    .then(({data, status}) => {
      return status === 200 || status === 201 ? data : null;
    })
    .catch(e => {
      console.log('in notification list', e);
    });
};
// const homeApi = payload => {
//   const request = `/feed`;
//   authorizedHeaders.Authorization = `Bearer ${payload.Auth}`;
//   return axios
//     .get(request, {headers: authorizedHeaders})
//     .then(({data, status}) => {
//       return status === 200 || status === 201 ? data : null;
//     })
//     .catch(e => {
//       console.log('in Home Api', e);
//     });
// };
const homeApi = (payload, data) => {
  console.log('data', data);
  const request = `/feed`;
  return axios
    .post(request, data, {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'multipart/form-data',
        Authorization: `Bearer ${payload.Auth}`,
      },
    })
    .then(({data, status}) => {
      return status === 200 || status === 201 ? data : null;
    })
    .catch(e => {
      console.log('in home', e);
    });
};
const completeBetApi = (payload, data) => {
  console.log('data', JSON.stringify(data));
  const request = `/complete-bet`;
  return axios
    .post(request, data, {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'multipart/form-data',
        Authorization: `Bearer ${payload.Auth}`,
      },
    })
    .then(({data, status}) => {
      return status === 200 || status === 201 ? data : null;
    })
    .catch(e => {
      console.log('in complete bet', e);
    });
};
const current = payload => {
  const request = `/current`;
  authorizedHeaders.Authorization = `Bearer ${payload.Auth}`;
  return axios
    .get(request, {headers: authorizedHeaders})
    .then(({data, status}) => {
      return status === 200 || status === 201 ? data : null;
    })
    .catch(e => {
      console.log('in bets', e);
    });
};
const open = payload => {
  const request = `/open`;
  authorizedHeaders.Authorization = `Bearer ${payload.Auth}`;
  return axios
    .get(request, {headers: authorizedHeaders})
    .then(({data, status}) => {
      return status === 200 || status === 201 ? data : null;
    })
    .catch(e => {
      console.log('in bets', e);
    });
};
const accepted = payload => {
  const request = `/accepted`;
  authorizedHeaders.Authorization = `Bearer ${payload.Auth}`;
  return axios
    .get(request, {headers: authorizedHeaders})
    .then(({data, status}) => {
      return status === 200 || status === 201 ? data : null;
    })
    .catch(e => {
      console.log('in bets', e);
    });
};
const acceptedAll = payload => {
  const request = `/feed/accept`;
  authorizedHeaders.Authorization = `Bearer ${payload.Auth}`;
  return axios
    .get(request, {headers: authorizedHeaders})
    .then(({data, status}) => {
      return status === 200 || status === 201 ? data : null;
    })
    .catch(e => {
      console.log('in bets', e);
    });
};
const completed = payload => {
  const request = `/completed`;
  authorizedHeaders.Authorization = `Bearer ${payload.Auth}`;
  return axios
    .get(request, {headers: authorizedHeaders})
    .then(({data, status}) => {
      return status === 200 || status === 201 ? data : null;
    })
    .catch(e => {
      console.log('in bets', e);
    });
};
const completedAll = payload => {
  const request = `/feed/complete`;
  authorizedHeaders.Authorization = `Bearer ${payload.Auth}`;
  return axios
    .get(request, {headers: authorizedHeaders})
    .then(({data, status}) => {
      return status === 200 || status === 201 ? data : null;
    })
    .catch(e => {
      console.log('in bets', e);
    });
};
const rejected = payload => {
  const request = `/rejected`;
  authorizedHeaders.Authorization = `Bearer ${payload.Auth}`;
  return axios
    .get(request, {headers: authorizedHeaders})
    .then(({data, status}) => {
      return status === 200 || status === 201 ? data : null;
    })
    .catch(e => {
      console.log('in bets', e);
    });
};
const mybet = payload => {
  const request = `/my-bet`;
  authorizedHeaders.Authorization = `Bearer ${payload.Auth}`;
  return axios
    .get(request, {headers: authorizedHeaders})
    .then(({data, status}) => {
      return status === 200 || status === 201 ? data : null;
    })
    .catch(e => {
      console.log('in bets', e);
    });
};
const changeNotificationstatus = payload => {
  const request = `/notification-status`;
  authorizedHeaders.Authorization = `Bearer ${payload.Auth}`;
  return axios
    .post(request, payload, {headers: authorizedHeaders})
    .then(({data, status}) => {
      return status === 200 || status === 201 ? data : null;
    })
    .catch(e => {
      console.log('in change status', e);
    });
};
const updateToken = payload => {
  const request = `/save-token`;
  authorizedHeaders.Authorization = `Bearer ${payload.Auth}`;
  return axios
    .post(request, payload, {headers: authorizedHeaders})
    .then(({data, status}) => {
      return status === 200 || status === 201 ? data : null;
    })
    .catch(e => {
      console.log('in update token');
    });
};
const CreateBet = (payload, data) => {
  console.log('data in create', data);
  const request = `/create-bet`;
  return axios
    .post(request, data, {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'multipart/form-data',
        Authorization: `Bearer ${payload.Auth}`,
      },
    })
    .then(({data, status}) => {
      return status === 200 || status === 201 ? data : null;
    })
    .catch(e => {
      console.log('in Create bet', e);
    });
};
export {
  login,
  register,
  homeApi,
  current,
  enterEmail,
  files,
  acceptedAll,
  completedAll,
  betCount,
  completeBetApi,
  mybet,
  sendMessage,
  completed,
  PostLikes,
  open,
  rejected,
  accepted,
  showComment,
  Search,
  newPassword,
  otp,
  acc,
  rej,
  editProfile,
  changePassword,
  addPost,
  showPosts,
  CreateBet,
  postLike,
  showComments,
  PowerRaking,
  doComment,
  searchUser,
  userProfile,
  followUser,
  postDetails,
  notificationList,
  changeNotificationstatus,
  updateToken,
};
