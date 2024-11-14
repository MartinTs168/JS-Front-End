function solve(arr) {
    class Song {
        constructor(typeList, name, time) {
            this.typeList = typeList;
            this.name = name;
            this.time = time;
        }
    }

    const songs = [];
    const n = arr[0];
    for (let i = 1; i <= n; i++) {
        const [typeList, name, time] = arr[i].split('_');
        let song = new Song(typeList, name, time);
        songs.push(song);
    }

    const list = arr.at(-1);
    if (list === 'all') {
        songs.forEach((song) => {
            console.log(song.name);
        });
    } else {
        songs.forEach((song) => {
            if (song.typeList === list) {
                console.log(song.name);
            }
        });
    }
}

solve([
    3,
    'favourite_DownTown_3:14',
    'favourite_Kiss_4:16',
    'favourite_Smooth Criminal_4:01',
    'favourite',
]);

solve([2, 'like_Replay_3:15', 'ban_Photoshop_3:48', 'all']);
