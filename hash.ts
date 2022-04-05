import bcrypt from 'bcryptjs';

const SALT_ROUNDS = 10;

export async function hashing(p: string) {
    const h = await bcrypt.hash(p, SALT_ROUNDS);
    return h
};

export async function checkHash(p: string, h: string) {
    const match = await bcrypt.compare(p, h)
    return match
};

// this function will create a real hash in the terminal which can be used for inserting values
// const getHash = async () => {
//     const h = await hashing("admin");
//     console.log(h);
// };
// getHash();
// because hashing is a async function, it returns a promise 
// therefore it has to be wrapped inside another async function which await h to be resolved

// kent = $2a$10$SF5YwdnplD5X6f4zCWal4eZpAHvxi07Tq3tbk3shdvM/7dP/bcHFO
// admin = $2a$10$ZXs8GaqgxpCeXBxU1zm38uJj6hF25lZpdh62EQ6DhBMIsIhElgTxS