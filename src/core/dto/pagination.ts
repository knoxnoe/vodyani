import { ApiProperty } from '@nestjs/swagger';
import { Expose } from '@vodyani/class-decorator';

export class PaginationQueryDto {
  @Expose()
  @ApiProperty({ name: 'index', example: '1', type: String, description: 'index' })
  public index?: string;

  @Expose()
  @ApiProperty({ name: 'size', example: '20', type: String, description: 'size' })
  public size?: string;

  @Expose()
  @ApiProperty({ name: 'order_by', example: 'id', type: String, description: 'pagination order by' })
  public orderBy?: string;

  @Expose()
  @ApiProperty({ name: 'order_rule', example: 'desc', type: String, description: 'pagination order rule' })
  public orderRule?: 'desc' | 'asc';
}
