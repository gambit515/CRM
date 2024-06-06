# Generated by Django 5.0.1 on 2024-02-23 06:28

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('crm_app', '0011_remove_procedure_note_procedure_notes_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='record',
            name='filial',
            field=models.ForeignKey(default=0, on_delete=django.db.models.deletion.CASCADE, to='crm_app.filial'),
        ),
        migrations.AddField(
            model_name='usersocialmedia',
            name='social_media',
            field=models.ForeignKey(default=0, on_delete=django.db.models.deletion.CASCADE, to='crm_app.socialmedia'),
        ),
        migrations.AlterField(
            model_name='procedure',
            name='notes',
            field=models.TextField(max_length=300, null=True),
        ),
    ]
