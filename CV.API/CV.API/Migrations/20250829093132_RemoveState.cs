using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace CV.API.Migrations
{
    /// <inheritdoc />
    public partial class RemoveState : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "State",
                table: "Skills");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "State",
                table: "Skills",
                type: "TEXT",
                nullable: true);
        }
    }
}
