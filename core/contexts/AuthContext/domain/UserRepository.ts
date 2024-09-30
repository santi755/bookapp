interface UserRepository {
    LogIn(user: User): Promise<void>;
    LogOut(): Promise<void>;
    GetUser(): Promise<User>;
}