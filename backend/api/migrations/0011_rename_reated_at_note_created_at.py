# Generated by Django 5.1.7 on 2025-03-15 06:30

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0010_rename_created_at_note_reated_at'),
    ]

    operations = [
        migrations.RenameField(
            model_name='note',
            old_name='reated_at',
            new_name='created_at',
        ),
    ]
