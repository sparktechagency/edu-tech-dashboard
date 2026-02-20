import React, { useContext, useEffect, useState } from 'react';
import { useProfileQuery } from '../redux/apiSlices/authSlice';

// const demoUser: User = {
//     email: 'yead.dev@example.com',
//     profilePic: 'https://i.ibb.co.com/B5bpqrSF/IMG-20251222-172138-1.jpg',
//     name: 'Asadur Rahman Yead',
//     password: 'SecurePass123',
//     role: 'Mentor Coordinator',
//     status: 'active',
//     contact: '+8801234567890',
//     address: 'Dhaka, Bangladesh',
//     professionalTitle: 'Full-Stack MERN Developer',
//     preferredGroup: 'Web Development',
//     availableHours: '9:00 AM - 6:00 PM',
//     aboutMe: 'Passionate developer specializing in React, Node.js, and scalable web applications.',
//     linkedin: 'https://linkedin.com/in/yead-dev',
//     github: 'https://github.com/yead191',
//     personalWebsite: 'https://yead-portfolio.vercel.app',
//     city: 'Dhaka',
//     zipCode: '1207',
//     streetAddress: 'House 12, Road 5, Dhanmondi',
// };

type UserContextType = {
    user: any | null;
    isLoading: boolean;
};

export const UserContext = React.createContext<UserContextType>({
    user: null,
    isLoading: true,
});

export const UserProvider = ({ children }: { children: React.ReactNode }): JSX.Element => {
    const [user, setUser] = useState<any | null>(null);
    const { data, isLoading } = useProfileQuery({});
    const profile = data?.data as any; // assert type if your API returns this

    useEffect(() => {
        if (profile) {
            setUser(profile);
        }
    }, [profile]);

    return <UserContext.Provider value={{ user: profile ?? null, isLoading }}>{children}</UserContext.Provider>;
};

export const useUser = () => {
    return useContext(UserContext);
};
