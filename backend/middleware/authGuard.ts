import { NextRequest } from "next/server";
import { UnauthorizedError } from "../utils/AppErrror";


export function authGuard (handler: Function) {
    return async (request: NextRequest) => {
        const accessToken = request.cookies.get("access-token")
        if (!accessToken) throw new UnauthorizedError("Invalid credentials")
        return handler(request, accessToken.value)
    }
}