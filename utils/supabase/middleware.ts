import { createServerClient } from '@supabase/ssr';
import { NextResponse, type NextRequest } from 'next/server';

/**
 * Updates the Supabase session and handles cookies.
 * @param {NextRequest} request - The incoming request object.
 * @returns {Promise<NextResponse>} - The response object with updated session information.
 */
export async function updateSession(request: NextRequest): Promise<NextResponse> {
    // Create a new response to be returned later
    const supabaseResponse = NextResponse.next({ request });

    // Create a Supabase client instance with cookie management
    const supabase = createServerClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL!,
        process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
        {
            cookies: {
                getAll() {
                    return request.cookies.getAll();
                },
                setAll(cookiesToSet) {
                    // Set cookies in the request and the response
                    cookiesToSet.forEach(({ name, value, options }) => {
                        request.cookies.set(name, value);
                        supabaseResponse.cookies.set(name, value, options);
                    });
                },
            },
        }
    );

    // Fetch the user session
    const { data: { user }, error: sessionError } = await supabase.auth.getUser();

    // Redirect to login if no user is found and not already on auth pages
    if (sessionError || !user) {
        const { pathname } = request.nextUrl;
        if (!pathname.startsWith('/login') && !pathname.startsWith('/auth')) {
            const url = request.nextUrl.clone();
            url.pathname = '/login';
            return NextResponse.redirect(url);
        }
    }

    return supabaseResponse;
}
