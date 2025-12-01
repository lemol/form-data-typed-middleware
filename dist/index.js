export function withFormData(schema) {
    return async (context) => {
        let data = context.formData ? Object.fromEntries(context.formData.entries()) : undefined;
        let result = await schema['~standard'].validate(data);
        if (result.issues) {
            return new Response(null, { status: 400 });
        }
        ;
        context.extra ??= {};
        context.extra.formData = result.value;
    };
}
