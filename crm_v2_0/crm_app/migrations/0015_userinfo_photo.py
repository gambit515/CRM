# Generated by Django 5.0.1 on 2024-02-26 07:48

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('crm_app', '0014_remove_userinfo_filial_alter_userinfo_notes'),
    ]

    operations = [
        migrations.AddField(
            model_name='userinfo',
            name='photo',
            field=models.ImageField(blank=True, upload_to='images/'),
        ),
    ]
