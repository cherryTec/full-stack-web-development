/// <reference types="@sveltejs/kit" />

type Todo = {
    uid: String;
    created_at: Date;
    text: String;
    done: Boolean;
}
