export default interface UserRepository {
  LogIn(email: string, password: string): Promise<any>;
}
