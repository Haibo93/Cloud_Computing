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