import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CategoryCreateManyInput } from "../../../inputs/CategoryCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyAndReturnCategoryArgs {
  @TypeGraphQL.Field(_type => [CategoryCreateManyInput], {
    nullable: false
  })
  data!: CategoryCreateManyInput[];
}
