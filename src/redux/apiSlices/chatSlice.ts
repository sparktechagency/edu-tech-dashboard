import { api } from '../api/baseApi';

export const chatSlice = api.injectEndpoints({
    endpoints: (builder) => ({
        getChatRooms: builder.query({
            query: () => ({
                url: '/chat',
                method: 'GET',
                cache: 'no-cache',
            }),
            providesTags: ['Chat-Rooms'],
        }),
        getMessages: builder.query({
            query: (chatId) => ({
                url: `/message/${chatId}`,
                method: 'GET',
                cache: 'no-cache',
            }),
            providesTags: ['Chat-Messages'],
        }),
        sendMessage: builder.mutation({
            query: (formData) => ({
                url: '/message',
                method: 'POST',
                body: formData,
            }),
            invalidatesTags: ['Chat-Messages'],
        }),
        createChatRoom: builder.mutation({
            query: (data) => ({
                url: '/chat',
                method: 'POST',
                body: data,
            }),
            invalidatesTags: ['Chat-Rooms'],
        }),
    }),
});

export const { useGetChatRoomsQuery, useGetMessagesQuery, useSendMessageMutation, useCreateChatRoomMutation } =
    chatSlice;
