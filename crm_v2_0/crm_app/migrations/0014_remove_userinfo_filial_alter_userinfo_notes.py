# Generated by Django 5.0.1 on 2024-02-23 07:57

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('crm_app', '0013_userinfo_patronymic'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='userinfo',
            name='filial',
        ),
        migrations.AlterField(
            model_name='userinfo',
            name='notes',
            field=models.TextField(blank=True, max_length=300),
        ),
    ]