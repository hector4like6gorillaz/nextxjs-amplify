export interface IJobWorkedExample {
    id:           string;
    job_type:     string;
    folder_id:    string;
    status:       string;
    payload:      Payload;
    result:       Result[];
    error:        null;
    created_at:   Date;
    processed_at: Date;
}

export interface Payload {
    files:     string[];
    folder_id: string;
}

export interface Result {
    file:   string;
    exists: boolean;
}
