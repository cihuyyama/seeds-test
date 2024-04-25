import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Post {
    id: number;
    title: string;
    content: string;
    publicationDate: string;
}

const initialState: Post[] = [
    {
        id: (Math.floor(Math.random() * 10000) + 10000),
        title: 'First post!',
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nisl nunc mi ipsum faucibus vitae aliquet. Sagittis nisl rhoncus mattis rhoncus. Neque viverra justo nec ultrices. Felis eget velit aliquet sagittis id consectetur purus ut faucibus. Diam phasellus vestibulum lorem sed risus ultricies tristique. Pharetra vel turpis nunc eget lorem dolor. Eget mauris pharetra et ultrices neque ornare. Mi proin sed libero enim sed faucibus turpis in. Urna condimentum mattis pellentesque id nibh tortor id aliquet lectus. Imperdiet proin fermentum leo vel. Velit laoreet id donec ultrices tincidunt arcu. Risus commodo viverra maecenas accumsan lacus vel. Enim nec dui nunc mattis enim ut tellus elementum sagittis. Nisl suscipit adipiscing bibendum est ultricies integer quis. Ut aliquam purus sit amet luctus. Quisque id diam vel quam elementum. Pulvinar elementum integer enim neque volutpat ac. Libero enim sed faucibus turpis in. Curabitur vitae nunc sed velit dignissim sodales ut eu sem.\Nam at lectus urna duis convallis. Ultrices neque ornare aenean euismod elementum nisi quis eleifend quam. Eu non diam phasellus vestibulum lorem. Nam libero justo laoreet sit amet. Cursus turpis massa tincidunt dui ut ornare lectus sit amet. Nibh venenatis cras sed felis eget velit. Eu turpis egestas pretium aenean pharetra magna ac placerat vestibulum. Arcu cursus euismod quis viverra nibh cras pulvinar mattis nunc. Neque laoreet suspendisse interdum consectetur libero id faucibus nisl. Cras ornare arcu dui vivamus arcu. Risus feugiat in ante metus dictum. Morbi tristique senectus et netus et. Sed odio morbi quis commodo odio aenean sed adipiscing diam. Faucibus scelerisque eleifend donec pretium vulputate sapien. Odio morbi quis commodo odio aenean sed adipiscing diam. Neque volutpat ac tincidunt vitae semper quis. Ut etiam sit amet nisl purus in mollis nunc. Felis donec et odio pellentesque. Elit sed vulputate mi sit amet. Laoreet id donec ultrices tincidunt arcu non sodales.\nAt augue eget arcu dictum varius. Sed lectus vestibulum mattis ullamcorper velit sed ullamcorper. Dictumst quisque sagittis purus sit amet volutpat. In massa tempor nec feugiat nisl. Senectus et netus et malesuada fames. Egestas fringilla phasellus faucibus scelerisque eleifend donec. Iaculis eu non diam phasellus vestibulum lorem sed risus. Posuere urna nec tincidunt praesent semper feugiat nibh sed. Ultrices vitae auctor eu augue ut lectus arcu. Nunc congue nisi vitae suscipit tellus. Nulla pharetra diam sit amet nisl. Quis ipsum suspendisse ultrices gravida dictum fusce ut placerat. At volutpat diam ut venenatis tellus in. Congue nisi vitae suscipit tellus mauris a diam maecenas. Sapien faucibus et molestie ac feugiat sed lectus vestibulum mattis. Id venenatis a condimentum vitae sapien pellentesque habitant morbi. Felis eget velit aliquet sagittis. Nunc eget lorem dolor sed viverra ipsum nunc.\nNon quam lacus suspendisse faucibus interdum posuere lorem ipsum. Dignissim suspendisse in est ante in. In cursus turpis massa tincidunt dui ut ornare lectus. Tempus urna et pharetra pharetra massa. Ut tristique et egestas quis ipsum suspendisse ultrices. Ut venenatis tellus in metus vulputate eu scelerisque felis imperdiet. Fermentum iaculis eu non diam. Cursus eget nunc scelerisque viverra mauris. Scelerisque viverra mauris in aliquam. Fringilla phasellus faucibus scelerisque eleifend donec pretium. Nisl nunc mi ipsum faucibus vitae. Semper feugiat nibh sed pulvinar proin gravida hendrerit. Mollis aliquam ut porttitor leo a diam sollicitudin. Amet consectetur adipiscing elit duis tristique sollicitudin nibh sit. Sollicitudin aliquam ultrices sagittis orci a scelerisque purus semper. Elit ut aliquam purus sit. Venenatis urna cursus eget nunc scelerisque viverra mauris. Vulputate eu scelerisque felis imperdiet proin. Nisl tincidunt eget nullam non nisi est.\nElementum curabitur vitae nunc sed velit dignissim sodales ut. Lorem sed risus ultricies tristique. Eget egestas purus viverra accumsan in. Dictum sit amet justo donec enim diam vulputate. Ut sem nulla pharetra diam sit amet nisl suscipit adipiscing. Non tellus orci ac auctor augue. Pulvinar neque laoreet suspendisse interdum consectetur. Massa vitae tortor condimentum lacinia quis vel. Auctor augue mauris augue neque gravida in fermentum et sollicitudin. Velit ut tortor pretium viverra suspendisse. Dignissim enim sit amet venenatis urna cursus eget. Diam donec adipiscing tristique risus nec feugiat. Curabitur vitae nunc sed velit dignissim sodales.",
        publicationDate: "4/26/2024, 12:29:31 AM"
    }
];

const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        addPost(state, action) {
            state.push(action.payload);
        },
        deletePost(state, action: PayloadAction<number>) {
            return state.filter((post) => post.id !== action.payload);
        },
        updatePost(state, action: PayloadAction<Post>) {
            const post = state.find((post) => post.id === action.payload.id);
            if (post) {
                post.title = action.payload.title;
                post.content = action.payload.content;
            }
        }
    }
});

export const { addPost, deletePost, updatePost } = postsSlice.actions;
export default postsSlice.reducer;