export class Account {
    public username: string;
    public password: string;

    constructor(data) {
        this.username = data.username;
        this.password = data.password;
    }
}

export class modelAuthLogin extends Account {
    super(data) { };
}

export interface Handler {
    handleRequest(): void
}

export interface SessionToken {
    tokenId: string,
    // username: string,
    // valid: boolean,
    // expirationTime: Date,
    // accessRights: AccessRight[]
}

export interface TokenGenerator {
    generatorToken(account: Account | undefined): Promise<SessionToken | undefined>
}

export enum AccessRight {
    CREATE,
    READ,
    UPDATE,
    DELETE
}

export interface UserCredential extends Account {
    accessRights: AccessRight[]
}
