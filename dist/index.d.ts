import type { StandardSchemaV1 } from '@standard-schema/spec';
import type { Middleware } from 'fetch-router-extra';
export declare function withFormData<T extends StandardSchemaV1>(schema: T): Middleware<{
    formData: StandardSchemaV1.InferOutput<T>;
}>;
//# sourceMappingURL=index.d.ts.map