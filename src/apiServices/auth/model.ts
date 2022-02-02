export class Account {
    public user: string;
    public pass: string;

    constructor(data) {
        this.user = data.user;
        this.pass = data.pass;
    }
}

export class modelAuthLogin extends Account {
    super(data) { };
}

export interface Handler {
    handlerRequest(): void
}

export interface SessionToken {
    tokenId: string;
}

export interface TokenGenerator {
    generatorToken(account: Account | undefined): Promise<SessionToken | undefined>
}
