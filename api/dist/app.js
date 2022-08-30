"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Server = void 0;
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
// import Routes
const auth_routes_1 = __importDefault(require("./routes/auth.routes"));
// Server class
class Server {
    // Constructor
    constructor(port) {
        this.port = port;
        this.app = (0, express_1.default)();
        this.config();
        this.routes();
    }
    ;
    // Config
    config() {
        // Settings
        this.app.set('port', this.port || process.env.PORT || 3000);
        // Middlewares
        this.app.use((0, morgan_1.default)('dev'));
        this.app.use(express_1.default.json());
        this.app.use(express_1.default.urlencoded({ extended: false }));
    }
    ;
    // Routes
    routes() {
        this.app.use('/users', auth_routes_1.default);
    }
    ;
    // Start
    start() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.app.listen(this.app.get('port'), () => {
                console.log('Server running on port', this.app.get('port'));
            });
        });
    }
    ;
}
exports.Server = Server;
;
//# sourceMappingURL=app.js.map