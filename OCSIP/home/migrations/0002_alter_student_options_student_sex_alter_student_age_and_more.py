# Generated by Django 4.1 on 2023-12-14 16:34

from django.db import migrations, models


class Migration(migrations.Migration):
    dependencies = [
        ("home", "0001_initial"),
    ]

    operations = [
        migrations.AlterModelOptions(
            name="student",
            options={"verbose_name": "学生", "verbose_name_plural": "学生"},
        ),
        migrations.AddField(
            model_name="student",
            name="sex",
            field=models.IntegerField(
                choices=[(1, "男"), (2, "女"), (3, "保密")], default=3, verbose_name="性别"
            ),
        ),
        migrations.AlterField(
            model_name="student",
            name="age",
            field=models.IntegerField(help_text="正数", verbose_name="年龄"),
        ),
        migrations.AlterField(
            model_name="student",
            name="name",
            field=models.CharField(max_length=20, verbose_name="姓名"),
        ),
    ]