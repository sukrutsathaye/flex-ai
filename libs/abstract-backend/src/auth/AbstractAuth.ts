export default abstract class AbstractAuth {
    public abstract signInWithEmail(email: string, password: string): Promise<any>;
    public abstract signOut(): Promise<any>;
    public abstract signUpWithEmail(email: string, password: string): Promise<any>;
    public abstract signInWithGoogle(): Promise<any>;
    public abstract getUser(): Promise<any>;
    public abstract onAuthStateChanged(callback: (user: any) => Promise<any>): Promise<any>;
}