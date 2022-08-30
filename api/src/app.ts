import express from 'express';
import morgan from 'morgan';

// import Routes
import Users from './routes/auth.routes'

// Server class
class Server {
    // Application interface
    private app: express.Application;
    // Constructor
    constructor(private port?: number | string) {
        this.app = express();
        this.config();
        this.routes();
    };
    // Config
    private config(): void {
        // Settings
        this.app.set('port', this.port || process.env.PORT || 3000);
        // Middlewares
        this.app.use(morgan('dev'));
        this.app.use(express.json());
        this.app.use(express.urlencoded({extended: false}));
    };
    // Routes
    private routes(): void {
        this.app.use('/users', Users);
    };
    // Start
    public async start(): Promise<void> {
        await this.app.listen(this.app.get('port'), () => {
            console.log('Server running on port', this.app.get('port'));
        });
    };
};

export { Server } ;