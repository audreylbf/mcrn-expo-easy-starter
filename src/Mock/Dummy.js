/**
 * Define and export the dummy data.
 */
export const sampleObject1 = {
  id: '001',
  title: 'this is a title',
  desc: 'Do elit pariatur aliqua laborum dolore qui.',
};
export const sampleObject2 = {
  firstName: 'John',
  lastName: 'Doe',
};

export const Playlists = [
  {
    id: '001',
    name: 'Stargroves',
    songs: 20,
    thumbnail: require('Assets/images/thumb_1.png')
  },
  {
    id: '002',
    name: 'So it goes',
    songs: 5,
    thumbnail: require('Assets/images/thumb_2.png')
  },
  {
    id: '003',
    name: 'Playlist 003',
    songs: 2,
    thumbnail: require('Assets/images/thumb_1.png')
  },
  {
    id: '004',
    name: 'Playlist 004',
    songs: 18,
    thumbnail: require('Assets/images/thumb_2.png')
  },
];

export const Favorites = [{
  id: '001', 
  url: '',
  title: 'Holy (feat. Chance the Rapper)',
  album: 'Great Album',
  artist: 'Justin Bieber',
  thumbnail: require('Assets/images/thumb_3.png'),
},{
  id: '002', 
  url: '',
  title: 'Thunder',
  album: 'Imagine Dragon',
  artist: 'Imagine Dragon',
  thumbnail: require('Assets/images/thumb_3.png'),
},
{
  id: '003', 
  url: '',
  title: 'Favorite 003',
  album: 'Favorite 003',
  artist: 'Favorite 003',
  thumbnail: require('Assets/images/thumb_3.png'),
}]
const dummyData = { Playlists, Favorites };

export default dummyData;
