import * as React from "react";
import { Form } from "./_components/Form";
import { Field } from "./_components/Field";

export const ContactUsForm: React.FunctionComponent = () => {
    return (
        <Form
            action="http://localhost:4351/api/contactus"
            render={() => (
                <React.Fragment>
                    <div className="alert alert-info" role="alert">
                        Enter the information below and we'll get back to you as soon as we
                        can.
                    </div>
                    <Field id="name" label="Name" />
                    <Field id="email" label="Email" />
                    <Field
                        id="reason"
                        label="Reason"
                        editor="dropdown"
                        options={["", "Marketing", "Support", "Feedback", "Jobs"]}
                    />
                    <Field id="notes" label="Notes" editor="multilinetextbox" />
                </React.Fragment>
            )}
        />
    );
};