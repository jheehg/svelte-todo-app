/// <reference types="node" />

declare global {
	namespace NodeJS {
		interface ProcessEnv {
			// readonly SUPABASE_APP: SupabaseClient;
			// readonly SUPABASE_ANON_KEY: string;
		}
	}
}

// If this file has no import/export statements (i.e. is a script)
// convert it into a module by adding an empty export statement.
export {};
