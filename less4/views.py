# -*- coding: utf-8 -*-
from django.shortcuts import render, redirect
from django.template.response import TemplateResponse, HttpResponse

def JstDef4(request):
    return TemplateResponse(request, 'less4/html4.html')

def JsDefDz4(request):
    return TemplateResponse(request, 'less4/htmldz4.html')
